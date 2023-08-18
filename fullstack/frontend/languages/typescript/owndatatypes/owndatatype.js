// var Human = /** @class */ (function () {
//     function Human() {
//         this.eyes = 2;
//     }
//     Human.prototype.withEyes = function () {
//         console.log("we can see");
//     };
//     Human.prototype.withnOSE = function () {
//         console.log("we can see");
//     };
//     return Human;
// }());
// var teju = new Human();
// teju;
// console.log(teju);

let tree=function(){
    function tree(){
      this .steam="uncountable";
    }
    tree.prototype.withleaves=function(){
      console.log("producing oxyzen");
    };
    tree.prototype.withroots=function(){
      console.log("keeping the water");
    };
    return tree;
    
  }();
  let tre=new tree();
  let treee=new  tree.prototype.withleaves();
  let treeee=new   tree.prototype.withroots();
  console.log(tre)
  console.log(treee)
  console.log(treeee)
  