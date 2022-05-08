from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Book_Listing
from .serializers import BookListingSerializer, listingDetailSerializer

# Create your views here.


class ListingsView(ListAPIView):
    queryset = Book_Listing.objects.all()
    permission_classes = (permissions.AllowAny, )
    serializer_class = BookListingSerializer
    lookup_field = 'slug'

class ListingView(RetrieveAPIView):
    queryset = Book_Listing.objects.all()
    serializer_class = listingDetailSerializer
    lookup_field = 'slug'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = BookListingSerializer

    def post(self, request, format=None):
        queryset = Book_Listing.objects.all()
        data = self.request.data

        category = data['category']
        queryset = queryset.filter(category__iexact=category)


        keywords = data['keywords']
        queryset = queryset.filter(title__icontains=keywords)

        serializer = BookListingSerializer(queryset, many=True)

        return Response(serializer.data)