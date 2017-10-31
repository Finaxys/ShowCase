from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse

def home(request):
    html = """
    <head>
<title>FINAXYS Ages</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" href="static/css/style.css" type="text/css" />
</head>
<body>
<div id="nav">
</div>
<div id="container">
  <div id="header">
    <h1>FINAXYS<span></span></h1>
    <h2>NOTRE SINGULARITE ? NOUS SOMMES PLURIELS !</h2>
  </div>
  <img src="static/images/FINAXYS.png" width="480" height="240" alt="" class="centered" />
</div>
<br>
<br>
<a href="/books_fbv_user/">LIST Finaxys staff ages</a><br>
</body>
    """
    return HttpResponse(html)