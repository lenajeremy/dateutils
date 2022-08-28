
type TimeValuesReturnValue = {
    seconds: number
    minutes: number
    hours: number
    days: number
    weeks: number
    months: number
    years: number
}

function getTimeValues(timeInSeconds: number): TimeValuesReturnValue {

    const seconds = Math.floor(timeInSeconds % 60);
    const minutes = Math.floor(timeInSeconds / 60);
    const hours = Math.floor(timeInSeconds / 3600);
    const days = Math.floor(timeInSeconds / (3600 * 24))
    const weeks = Math.floor(timeInSeconds / (3600 * 24 * 7))
    const months = Math.floor(timeInSeconds / (3600 * 24 * 30))
    const years = Math.floor(timeInSeconds / (3600 * 24 * 365))

    return {
        hours,
        minutes,
        seconds,
        days,
        weeks,
        months,
        years
    }
}

export function getTimeDifference(date: string | Date): string {

    if (typeof date === 'string') date = new Date(date)

    const nowTS = new Date().getTime() / 1000
    const dateTS = date.getTime() / 1000

    const difference = nowTS - dateTS

    const { years, months, weeks, days, hours, minutes, seconds } = getTimeValues(difference)

    if (years > 0) {
        return years + ' year' + (years > 1 ? 's' : '') + ' ago'
    } else if (months > 0) {
        return months + ' month' + (months > 1 ? 's' : '') + ' ago'
    } else if (weeks > 0) {
        return weeks + ' week' + (weeks > 1 ? 's' : '') + ' ago'
    } else if (days > 0) {
        return days + ' day' + (days > 1 ? 's' : '') + ' ago'
    } else if (hours > 0) {
        return hours + ' hour' + (hours > 1 ? 's' : '') + ' ago'
    } else if (minutes > 0) {
        return minutes + ' min' + (minutes > 1 ? 's' : '') + ' ago'
    } else {
        return 'just now'
    }
}