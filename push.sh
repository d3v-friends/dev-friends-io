git push
source ./env/.env && \
docker build \
--build-arg AWS_ID="$AWS_ID"  \
--build-arg AWS_PW="$AWS_PW"  \
--build-arg AWS_REGION="$AWS_REGION"  \
--build-arg AWS_S3="$AWS_S3"  \
-f ./docker/builder.dockerfile .;
