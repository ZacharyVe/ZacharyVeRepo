$('#twd').accordion({active: false, collapsable: true, animate: 1000, event: "mouseover"}).css("width", "50%");

$("#cast").sortable({axis: "y", cursor: "grabbing", items: ">li:nth-of-type(even)", placeholder: "sortable-placeholder"});

$("#innerDiv").draggable({containment: "parent", revert: true});

function person(first,last,age,){
  this.first=first;
  this.last=last;
  this.age=age;
  this.height=height;
}
var jobObject = person("jon", "lue")
var jobObject = new person("jon", "lue")


