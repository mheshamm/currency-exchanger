export class Constants {
  public static BASE_FAST_FOREX_URL = 'https://api.fastforex.io/';
  public static API_KEY_STRING = 'api_key';
  public static API_KEY_VALUE = '44ad8546a9-63b56e5b6a-rlkplr';
  public static API_GET_ALL_CURRENCIES =
    Constants.BASE_FAST_FOREX_URL + 'currencies';
  public static API_CONVERT_CURRENCY_TO_ANOTHER =
    Constants.BASE_FAST_FOREX_URL + 'fetch-one';
  public static fullDateTimeFormat = 'MMM d, y, h:mm:ss a';
}
