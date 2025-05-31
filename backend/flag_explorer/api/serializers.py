from rest_framework import serializers

class CountrySerializer(serializers.Serializer):
    name = serializers.CharField(source="name.common")
    population = serializers.IntegerField()
    capital = serializers.SerializerMethodField()
    flag = serializers.URLField(source="flags.png")

    def get_capital(self, obj):
        # Safely access the capital field
        capital_list = obj.get("capital", [])
        return capital_list[0] if capital_list else None