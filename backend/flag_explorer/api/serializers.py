from rest_framework import serializers

class CountrySerializer(serializers.Serializer):
    name = serializers.CharField(source="name.common")
    population = serializers.IntegerField()
    capital = serializers.CharField(source="capital.0", allow_null=True)
    flag = serializers.URLField(source="flags.png")