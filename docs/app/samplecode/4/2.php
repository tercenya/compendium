$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
switch($http_code) {
  case 404:
    echo "*** no game in progress\n";
    exit;

  case 200:
    $response = json_decode($json);
    # ...
}
