// 點選漢堡按鈕出現menu選單
const hamburgerBtn = document.getElementById('hamburgerBtn')
const menubar = document.getElementById('left-menu')
const icon = document.getElementById('hamburger-icon')

let isOpen = false;

hamburgerBtn.addEventListener('click', function (e) {
    e.preventDefault()
    isOpen = !isOpen;
    menubar.classList.toggle('active')
    icon.src = isOpen ? './images/menu_close.png' : './images/menubar_black.png';
})

// 取得現在時間
function showTime() {
    const now = new Date();

    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true, // 12 小時制
    };

    const timeString = now.toLocaleTimeString('zh-TW', options);

    document.getElementById('time').textContent = timeString;
}

showTime();