# WEBD 3012 Business Systems Build and Testing
__Assignment #__: Coding Assignment: 12

__Prepared by__: Simon Neufville

## Assignment specifics

This project uses `create vite@latest` with the `React/TypeScript` template and `StorybookJS` which results in the creation of a React application (the expected output)

## How to run

This assumes docker is installed and works correctly

```shell
# build the image (docker build . -t <name>) if needed
# example below
docker build . -t "sneufville-coding-assign12:v1.0"
```

```shell
# run the image
docker run --name neufville_simon_coding_assignment12 -dp 8083:8083 sneufville-coding-assign12:v1.0
```

The Storybook application will be accessible at `http://localhost:8083`
