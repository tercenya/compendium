case http_response
when Net::HTTPNotFound # 404
  puts "*** no game in progress"
  exit

when Net::HTTPSuccess # 200
  json = http_response.body
