#!/bin/sh

aws s3 cp index.html s3://elenas-wordle
aws s3 cp 404.html s3://elenas-wordle
aws s3 cp javascript s3://elenas-wordle/javascript --recursive
aws s3 cp stylesheets s3://elenas-wordle/stylesheets --recursive
aws s3 cp images s3://elenas-wordle/images --recursive

# it would be much better if we could do this :)
# aws s3 cp website s3://elenas-wordle --recursive