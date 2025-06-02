import pytest
from rest_framework.test import APIClient
from unittest.mock import patch
from api.views import CountryListView

@pytest.mark.django_db
class TestCountryListView:
    def setup_method(self):
        self.client = APIClient()

    @patch('api.services.CountryService.get_all_countries')
    def test_get_all_countries(self, mock_get_all):
        mock_get_all.return_value = [
            {"name": {"common": "France"}, "population": 67391582, "capital": ["Paris"], "flags": {"png": "url"}},
        ]
        response = self.client.get('/api/v1/countries/')
        assert response.status_code == 200
        assert len(response.data) == 1
        assert response.data[0]["name"] == "France"

    @patch('api.services.CountryService.get_countries_by_name')
    def test_get_country_by_name(self, mock_get_by_name):
        mock_get_by_name.return_value = [
            {"name": {"common": "France"}, "population": 67391582, "capital": ["Paris"], "flags": {"png": "url"}},
        ]
        response = self.client.get('/api/v1/countries/?name=France')
        assert response.status_code == 200
        assert response.data[0]["name"] == "France"