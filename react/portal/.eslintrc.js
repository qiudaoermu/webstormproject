module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "amd": true,
        "es6": true,
        "mocha": true
    },
    "parser": "babel-eslint",
    "parserOptions":{
        "ecmaVersion":6,
        "sourceType":"module",
        "ecmaFeatures":{

            "experimentalObjectRestSpread":true,
            "modules":true
        }
    },

    "extends": "eslint:recommended",
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    "rules": {
        ////////////////
        // 可能的错误 //
        ////////////////
        /*
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        */
        "no-unused-vars": [1],
        //"no-undef":"off",
        "no-undef":[1],
        // 允许console.log()函数
        "no-console":[1],
        // 禁止使用alert confirm prompt
        "no-alert": 2,

        //////////////
        // 最佳实践 //
        //////////////
        // switch中的case标签不能重复
        "no-duplicate-case": 2,
        // 禁止修改const声明的变量
        "no-const-assign": 2,
        // 禁止使用continue
        "no-continue": 0,
        // 禁止使用eval
        "no-eval": 1,
        // 禁止多余的冒号
        "no-extra-semi": 2,
        // 禁止switch穿透
        "no-fallthrough": 1,
        // 禁止重复的函数声明
        "no-func-assign": 2,
        // 禁止行内备注
        "no-inline-comments": 0,
        // 禁止使用new Object()
        "no-new-object": 2,
        //禁止使用++，--
        "no-plusplus": 0,
        //禁止重复声明变量
        "no-redeclare": 2,
        //禁止稀疏数组， [1,,2]
        "no-sparse-arrays": 2,
        //未定义前不能使用
        "no-use-before-define": 2,
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-empty-function":0,
        //
        "no-class-assign":0,

        "linebreak-style": [ // 使用 /n 作为换行标志
            "error",
            "windows"
        ],
        "quotes": [ // 字符串标志 单引号
            //"error",
            "off",
            "single"
        ],


        // 关闭语句强制分号结尾
        "semi": [1],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, {"max": 100}],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0]
    }
};
