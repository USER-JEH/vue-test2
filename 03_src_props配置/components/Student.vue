<template>
     <div>
        <h1>{{msg}}</h1>
        <h2>Student name: {{name}}</h2>
        <h2>Student gender: {{gender}}</h2>
        <h2>Student age: {{age+1}}</h2>
    </div>
</template>

<script>
export default {   
    name : 'Student',
    data() {
        return {
            msg:'I am a man',
        }
    },
    // 一番簡単な表現式
    // props:['name','gender','age']

    // データのタイプを指定するバージョン
    // props:{
    //     name:String,
    //     gender:String,
    //     age:Number
    // }

    // タイプとデフォルト値などを指定する
    props:{
        name:{
            type:String,
            required:true
            // nameのタイプはStringで、必ずnameの入力が必要
        },
        age:{
            type:Number,
            default:99
            // ageのタイプはNumberで、入力がない場合はデフォルト値を表示
        },
        gender:{
            type:String,
            required:true
        },
    }
}
</script>

