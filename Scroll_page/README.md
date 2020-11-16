<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
    <!-- stylesheet -->
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Scroll</title>
</head>
<body>
    <!-- header -->
    <header id="home">
        <!-- navbar -->
        <nav id="nav">
            <div class="nav-center">
                <!-- nav header -->
                <div class="nav-header">
                    <img class="logo" src="logo.svg" alt="logo">
                    <button class="nav-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <!-- links -->
                <div class="links-container">
                    <ul class="links">
                        <li>
                            <a href="#home" class="scroll-link">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="scroll-link">About</a>
                        </li>
                        <li>
                            <a href="#services" class="scroll-link">Services</a>
                        </li>
                        <li>
                            <a href="#tours" class="scroll-link">Tours</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="banner">
            <div class="container">
                <h1>Scroll Project</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ad quis suscipit ratione expedita. In soluta iste maxime esse quod.</p>
                <a href="#tours" class="scroll-link btn btn-white">explore tours</a>
            </div>
        </div>
    </header>
    <!-- about -->
    <section id="about" class="section">
        <div class="title">
            <h2>about<span> us</span></h2>
        </div>
    </section>
    <!-- services -->
    <section id="services" class="section">
        <div class="title">
            <h2>our <span>services</span></h2>
        </div>
    </section>
    <!-- tours -->
    <section id="tours" class="section">
        <div class="title">
            <h2>features <span>tours</span></h2>
        </div>
    </section>
    <!-- footer -->
    <footer class="section">
        <p>copyrigth &copy; backroads travel company <span id="date"></span>.All rights reserved</p>
    </footer>
    <!-- back to top button -->
    <a href="#home" class="scroll-link top-link"><i class="fas fa-arrow-up"></i></a>



    <script src="script.js" defer></script>
</body>
</html>
