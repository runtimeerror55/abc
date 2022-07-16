let socket = io()
socket.on("take your data", (payload) =>
{
    insertStatsHtml(payload)
    transitionClose()
})