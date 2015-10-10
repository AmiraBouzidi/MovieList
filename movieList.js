

function MoviesList($scope) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://192.168.31.108:5000/movies", false );
    xmlHttp.send( null );
    $scope.movies= JSON.parse(xmlHttp.responseText);
    $scope.Play= function (id) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", "http://192.168.31.108:5000/play/"+id, true );
        xmlHttp.send();
        $scope.movies= JSON.parse(xmlHttp.responseText);
                        }
    $scope.Delete= function (id) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", "http://192.168.31.108:5000/delete/"+id, true );
        xmlHttp.send();
        $scope.movies= JSON.parse(xmlHttp.responseText);
                        }
                    }

function MoviesInfo($scope) {
  //code to handel if the movie info exist in our db or not
    imbdID='tt0111';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://www.omdbapi.com/?i="+imbdID+"&plot=full&r=json", false );
    xmlHttp.send( null );
    $scope.info= JSON.parse(xmlHttp.responseText);

}
