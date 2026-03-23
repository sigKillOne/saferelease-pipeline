# SafeRelease Pipeline

A CI/CD pipeline with automatic rollback built with GitHub Actions, Docker, and AWS EC2.

## How it works
- Push code to main branch
- GitHub Actions builds a Docker image
- Image is pushed to Docker Hub
- Pipeline SSHes into AWS EC2 and deploys the container
- Health check runs on /health endpoint
- If health check passes → new version is live
- If health check fails → automatically rolls back to previous version

## Tech Stack
- GitHub Actions — pipeline runner
- Docker + Docker Hub — containerisation and image storage
- AWS EC2 — cloud server
- Node.js — sample application
