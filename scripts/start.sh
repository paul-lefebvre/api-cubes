#!/bin/sh
#===========================
#       VARIABLES
#===========================
ERROR='\033[0;31m'
WARNING='\033[0;33m'
SUCCESS='\033[1;32m'
INFOS='\033[1;34m'
NC='\033[0m' # No Color
TAG='\033[0m[\033[0;36mLFC-API\033[0m] '
#===========================
#       COMMAND HELP
#===========================
Help() {
    echo ""
    echo -e "${TAG}${INFOS}AIDE: ${NC}Script pour build/start l'API LFC"
    echo ""
    echo -e "          ${INFOS}SYNTAXE:${NC} start [ --build | --help ]"
    echo -e "          ${INFOS}ARGUMENTS:"
    echo -e "               ${INFOS}[--build | -build | -b]     ${NC}Créé et démarre l'ensemble des services de l'API"
    echo -e "               ${INFOS}[--help | -help | -h]       ${NC}Affiche cette aide"
    echo ""
    return
}
#===========================
# BUILD & CREATE CONTAINERS
#===========================
Build() {
    echo ""
    echo -e "${TAG}${INFOS}Build in progress...${NC}"
    echo ""
    docker stop app-cubes #> /dev/null 2>&1 &
    docker rm app-cubes #> /dev/null 2>&1 &
    docker-compose down --remove-orphans #> /dev/null 2>&1 &
    echo ""
    echo -e "${TAG}${SUCCESS}API's Containers removed !${NC}"
    echo ""
    docker-compose up --build --force-recreate -d
    echo ""
    echo -e "${TAG}${SUCCESS}Build success !"
    echo ""
    return
}
#===========================
#   START API CONTAINERS
#===========================
Start()  {
    docker restart postgres #> /dev/null 2>&1 &
    echo -e "${TAG}${SUCCESS}postgres initialized !"
    echo ""
    docker restart pgadmin #> /dev/null 2>&1 &
    echo -e "${TAG}${SUCCESS}pgadmin initialized !"
    echo ""
    docker stop app-cubes #> /dev/null 2>&1 &
    docker rm app-cubes #> /dev/null 2>&1 &
    docker run -v `pwd`:/usr/app -p 3000:3000 -d --name app-cubes api_app-cubes #> /dev/null 2>&1 &
    echo -e "${TAG}${SUCCESS}API LinkForCitizens initialized !"
    echo ""
    echo -e "${TAG}${INFOS}Start working at --> ${NC}http://linkforcitizens.local:3000"
    echo ""
    return
}
#===========================
#       HANDLE ARGS
#===========================
while getopts ":h :help :-help :b :build :-build" option; do
   case $option in
      h)
        Help
        exit;;
      help)
        Help
        exit;;
      -help)
        Help
        exit;;
      b)
        Build
        Start
        exit;;
      build)
        Build
        Start
        exit;;
      -build)
        Build
        Start
        exit;;
      \?) # Invalid option
        echo -e "${TAG}${ERROR}Erreur:${NC} Argument Invalide. -help pour afficher l'aide."
        exit;;
   esac
done
if [ $# -eq 0 ]; then
    Start
    exit 1
fi