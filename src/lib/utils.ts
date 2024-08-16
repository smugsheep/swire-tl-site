type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return formatter.format(new Date(date))
}

const monthMap = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

export function getMonthName(month: string): string {
    return monthMap[month as keyof typeof monthMap] || '';
}