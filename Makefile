init: docker-down-clear client-clear \
	docker-pull docker-build docker-up \
	client-init
up: docker-up
down: docker-down
restart: down up

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down --remove-orphans

docker-down-clear:
	docker-compose down -v --remove-orphans

docker-pull:
	docker-compose pull

docker-build:
	docker-compose build

client-init: client-install client-ready

client-clear:
	docker run --rm -v ${PWD}/client:/app -w /app alpine sh -c 'rm -rf .ready build'

client-install:
	docker-compose run --rm client-node-cli yarn install

client-ready:
	docker run --rm -v ${PWD}/client:/app -w /app alpine touch .ready

build: build-gateway build-client

build-gateway:
	docker --log-level=debug build --pull --file=gateway/docker/production/nginx/Dockerfile --tag=${REGISTRY}/portfolio-gateway:${IMAGE_TAG} gateway/docker

build-client:
	docker --log-level=debug build --pull --file=client/docker/production/nginx/Dockerfile --tag=${REGISTRY}/portfolio-client:${IMAGE_TAG} client

try-build:
	REGISTRY=localhost IMAGE_TAG=0 make build

push: push-gateway push-client

push-gateway:
	docker push ${REGISTRY}/portfolio-gateway:${IMAGE_TAG}

push-client:
	docker push ${REGISTRY}/portfolio-client:${IMAGE_TAG}
