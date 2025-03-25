const prayerTimes = {
    Fajr: "05:00",
    Dhuhr: "12:30",
    Asr: "15:45",
    Maghrib: "18:30",
    Isha: "20:00"
};

function displayPrayerTimes() {
    const timesDiv = document.getElementById('times');
    for (const [prayer, time] of Object.entries(prayerTimes)) {
        const row = document.createElement('tr');
        const prayerCell = document.createElement('td');
        const timeCell = document.createElement('td');
        const buttonCell = document.createElement('td');

        prayerCell.textContent = prayer;
        timeCell.textContent = time;

        const button = document.createElement('button');
        button.textContent = "حدد";
        button.onclick = () => alert(`تم تحديد وقت صلاة ${prayer} في ${time}`);
        
        buttonCell.appendChild(button);
        row.appendChild(prayerCell);
        row.appendChild(timeCell);
        row.appendChild(buttonCell);
        timesDiv.appendChild(row);
    }
}

// عرض مواقيت الصلاة عند تحميل الصفحة
window.onload = displayPrayerTimes;

