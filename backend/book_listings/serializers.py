from rest_framework import serializers
from .models import Book_Listing

class BookListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book_Listing
        fields = ('title', 'category', 'image')

class listingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book_Listing
        fields = ('title', 'summary', 'category', 'image')
        lookup_field = 'slug'