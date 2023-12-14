docker build --no-cache -f SQL\Dockerfile.PostgreSql -t modelucheta-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t modelucheta-java/app ../../..
