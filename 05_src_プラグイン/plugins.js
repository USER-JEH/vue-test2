export default {
    install(Vue){
        //全域フィルター
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        //全域指令を定義
        Vue.directive('fbind',{
            bind(element,binding){
                element.value = binding.value
            },
            inserted(element,binding){
                element.focus()
            },
            update(element,binding) {
                element.value = binding.value
            },
        })

        //混入定義
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })

        //Vueに効果を追加（vmとvc全部使える）
        Vue.prototype.hello = ()=>{alert('Hello')}
    }
}