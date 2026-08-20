<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>بهترین لندینگ شما</h1>
        <p>با دیتابیس ما، ایده‌های خود را به واقعیت تبدیل کنید.</p>
    </header>
    <main>
        <section id="features">
            <h2>ویژگی‌ها</h2>
            <ul>
                <li>سرعت بالا</li>
                <li>امنیت بی‌نظیر</li>
                <li>قابلیت اطمینان</li>
            </ul>
        </section>
        <section id="contact">
            <h2>تماس با ما</h2>
            <form id="contact-form">
                <label for="name">نام:</label>
                <input type="text" id="name" required>

                <label for="email">ایمیل:</label>
                <input type="email" id="email" required>

                <label for="message">پیام:</label>
                <textarea id="message" rows="4" required></textarea>

                <button type="submit">ارسال</button>
            </form>
            <p id="form-message"></p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 لندینگ شما. تمامی حقوق محفوظ است.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
