<!DOCTYPE html>
<html>
    <head>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="homePage.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="homePage.js"></script>
    </head>
    <body>
        <h1 class="display-1">Jordan Carlson</h1>
        <nav class="navbar navbar-expand-sm bg-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="FileDirectory.php">Index</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Other1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Other2</a>
                </li>
              </ul>
        </nav>            
            
        <div class="row flex-wrap">
            <div class="col">
                <img class="rounded float-left d-block" src="Photos/hawaiiWavesLeft.jpg" alt="Hawaii Left">
            </div>
            <div class="col">
                <img id="center" class="rounded mx-auto d-block" src="Photos/meSnoqFalls.jpg" alt="me">
            </div>
            <div class="col">
                <img class="rounded float-right d-block" src="Photos/hawaiiWavesRight.jpg" alt="Hawaii Right">
            </div>      
        </div>

        <div class="row bg-dark flex-wrap" id="text">
            <div class="col">
                <p class="text-justify">Hobbies include: Soccer, Guitar, Photography, and Camping</p>
            </div>
            <div class="col">
                <p class="font-weight-bold text-justify text-lead">Hello, My name is Jordan Carlson and i love the outdoors and traveling. Hawaii is on of my favorite places to go.</p>
            </div>
            <div class="col">
                <p class="text-justify">I am interested in the field of Web Site Design and A.I. but would rather spend time in the outdoors with friends and family or working on fun random projects</p>
            </div>
        </div>

    </body>
</html>
