from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CountrySerializer
from .services import CountryService

class CountryListView(APIView):
    def get(self, request):
        name = request.query_params.get("name", None)
        try:
            if name:
                data = CountryService.get_countries_by_name(name)
            else:
                data = CountryService.get_all_countries()
            serializer = CountrySerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
