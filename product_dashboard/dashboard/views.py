from django.http import HttpResponse
from django.template import loader
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializer import ItemSerializer

# Create your views here.


def fetch():
    products = Product.objects.all()
    serializedData = ItemSerializer(products, many=True).data
    return serializedData


@api_view(["GET"])
def get_products(request):
    serializedData = fetch()

    # if there are no products in the db, init the db
    if not serializedData:
        init_db()
        serializedData = fetch()

    return Response(serializedData)


def init_db():
    file_path = "SWE 2 -products (3).json"
    with open(file_path, "r") as f:
        data = json.load(f)

    for item in data["products"]["data"]["items"]:
        Product.objects.create(
            id=item["id"],
            name=item["name"],
            price=item["price"],
            totalreviews=item["totalreviews"],
            Rating=item["Rating"],
        )


# function is unused
@api_view(["POST"])
def create_product(request):
    data = request.data
    serializer = ItemSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
