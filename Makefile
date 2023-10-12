DOCKER_COMPOSE_DEV = ./docker-compose.yml

build-dev:
	docker compose -f $(DOCKER_COMPOSE_DEV) build

up-dev:
	docker compose -f $(DOCKER_COMPOSE_DEV) up --remove-orphans

down-dev:
	docker compose -f $(DOCKER_COMPOSE_DEV) down

restart-dev:
	docker compose -f $(DOCKER_COMPOSE_DEV) restart

stop-dev:
	docker compose -f $(DOCKER_COMPOSE_DEV) stop

.PHONY: build-dev up-dev down-dev restart-dev stop-dev
