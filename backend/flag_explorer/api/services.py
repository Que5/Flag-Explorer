import requests
from rest_framework.exceptions import APIException

class CountryService:
    BASE_URL = "https://restcountries.com/v3.1"

    @staticmethod
    def get_all_countries():
        try:
            response = requests.get(f"{CountryService.BASE_URL}/all")
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            raise APIException(f"Failed to fetch countries: {str(e)}")

    @staticmethod
    def get_countries_by_name(name):
        try:
            response = requests.get(f"{CountryService.BASE_URL}/name/{name}")
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            raise APIException(f"Failed to fetch country by name: {str(e)}")