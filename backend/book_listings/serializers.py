from rest_framework import serializers
from .models import Book_Listing


class BookListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book_Listing
        fields = ('title', 'category', 'image', 'slug')


class listingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book_Listing
        fields = ('title', 'summary', 'category', 'image', 'slug')
        lookup_field = 'slug'
