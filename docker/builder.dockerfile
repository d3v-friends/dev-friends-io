FROM klakegg/hugo:ext-alpine AS BUILDER

WORKDIR /src
COPY . .
RUN hugo

FROM amazon/aws-cli

ARG AWS_ID
ARG AWS_PW
ARG AWS_S3
ARG AWS_REGION

ENV AWS_ACCESS_KEY_ID=$AWS_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_PW
ENV AWS_DEFAULT_REGION=$AWS_REGION

RUN echo "id: ${AWS_ID}"
RUN echo "s3: ${AWS_S3}"
RUN echo "region: ${AWS_REGION}"


WORKDIR /src
COPY --from=BUILDER /src/public ./public
RUN aws s3 sync ./public s3://${AWS_S3}

