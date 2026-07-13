# ────────────────────────────────────────────────
# nitip-profile Makefile
# ────────────────────────────────────────────────
APP_NAME    := nitip-profile
SHELL       := /bin/bash

.PHONY: help dev build clean docker docker-up docker-down docker-logs

## help: Show this help
help:
	@echo ""
	@echo "  $(APP_NAME) — available commands:"
	@echo ""
	@grep -E '^##' Makefile | sed 's/## /  /' | column -t -s ":"
	@echo ""

## dev: Start development server
dev:
	npm run dev

## build: Build for production
build:
	npm run build

## clean: Remove build artefacts
clean:
	rm -rf .nuxt .output node_modules
	@echo "✓ cleaned"

## docker: Build Docker image
docker:
	docker compose build
	@echo "✓ Docker image built"

## docker-up: Start container
docker-up:
	docker compose up -d
	@echo "✓ Container started on port 3000"

## docker-down: Stop container
docker-down:
	docker compose down

## docker-logs: Tail container logs
docker-logs:
	docker compose logs -f

## docker-rebuild: Clean build and restart container
docker-rebuild:
	docker compose down
	docker compose build --no-cache
	docker compose up -d
	@echo "✓ Container rebuilt and restarted"