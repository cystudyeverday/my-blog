# ./build-push.sh 
# push to docker hub

# Load environment variables from .env.local if it exists
# SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# if [ -f "${SCRIPT_DIR}/.env.local" ]; then
#     echo "Loading environment variables from .env.local"
#     set -a  # automatically export all variables
#     source "${SCRIPT_DIR}/.env.local"
#     set +a  # stop automatically exporting
# fi

VERION="1.0"

DOCKER_USER="${DOCKER_USER:-cysporteveryday}"
DOCKER_PWD="${DOCKER_PWD:-dckr_pat_fM7jajRafJ3EmB9PXHOKgn5GHxI}"

MODULE_NAME="my-blog"
IMAGE_NAME="${DOCKER_USER}/${MODULE_NAME}:${VERION}"
IMAGE_LATEST="${DOCKER_USER}/${MODULE_NAME}:latest"

RED=`tput setaf 1`
GREEN=`tput setaf 2`
YELLOW=`tput setaf 11`
RESET=`tput sgr0`

cd `dirname $0`
echo "Start from folder:${YELLOW}`pwd`${RESET}"

echo "Image Name:${YELLOW} ${IMAGE_LATEST}${RESET}"
echo "${GREEN}Creating Docker Image${RESET}"
# Enable BuildKit for better caching and performance
export DOCKER_BUILDKIT=1
sudo docker build --build-arg MODULE_NAME=${MODULE_NAME} -t ${IMAGE_LATEST} .
echo "${GREEN}Done${RESET}"

if [ -z "$DOCKER_PWD" ]; then
    echo "${RED}Error: DOCKER_PWD environment variable is not set${RESET}"
    echo "Please set it with: export DOCKER_PWD=your_password"
    exit 1
fi

echo "${GREEN}Pushing Image to DockerHub${RESET}"
sudo docker login -u ${DOCKER_USER} -p ${DOCKER_PWD} && sudo docker push ${IMAGE_LATEST}
echo "${GREEN}Done${RESET}"