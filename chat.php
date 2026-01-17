<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat dengan Seller - UMKM Digital</title>
    <link rel="stylesheet" href="assets/css/style.css?v=2.6">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://js.puter.com/v2/"></script>
</head>
<body class="chat-body">
    <div id="chat-container" class="chat-container">
        <!-- Content will be rendered by JS -->
    </div>

    <!-- JavaScript -->
    <script src="assets/js/data.js?v=2.8"></script>
    <script src="assets/js/main.js?v=2.9"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof initChatPage === 'function') {
                initChatPage();
            }
        });
    </script>
</body>
</html>
