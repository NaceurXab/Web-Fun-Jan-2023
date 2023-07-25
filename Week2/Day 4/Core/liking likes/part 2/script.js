var counts = [9,12,9]
var likes = [
    document.querySelector(".lk1"),
    document.querySelector(".lk2"),
    document.querySelector(".lk3")
]

function add(nb){
    counts[nb]++
    likes[nb].innerHTML = counts[nb] + "like(s)"
}
