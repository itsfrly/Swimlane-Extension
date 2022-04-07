for(let i=0; i < 10; i++){
    document.getElementsByClassName("vertical-list")[i].style.overflowY = 'scroll'
    document.getElementsByClassName("item-list")[i].style.overflowY = 'scroll'
    document.getElementsByClassName("item-list-container")[i].style.overflowY = 'scroll'
    document.getElementsByClassName("integration-page")[i].style.overflowY = 'scroll'
}


chrome.webNavigation.onHistoryStateUpdated.addListener(function(){
    for(let i=0; i < 10; i++){
        document.getElementsByClassName("vertical-list")[i].style.overflowY = 'scroll'
        document.getElementsByClassName("item-list")[i].style.overflowY = 'scroll'
        document.getElementsByClassName("item-list-container")[i].style.overflowY = 'scroll'
        document.getElementsByClassName("integration-page")[i].style.overflowY = 'scroll'
    }
})