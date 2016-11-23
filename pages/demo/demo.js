Page({
    data: {
            username: '',
            password: '',
            nickname: '',
            name:'',
            psd:'',
            grant_type: "password"
    },
    bindKeyInput: function(e) {
        this.setData({
            username: e.detail.value
        })
    },
    bindPsdInput: function(e) {
        this.setData({
            password: e.detail.value
        })
    },
    bindNameInput: function(e) {
        this.setData({
            nickname: e.detail.value
        })
    },
    usernameInput: function(e) {
        this.setData({
            name: e.detail.value
        })
    },
    psdInput: function(e) {
        this.setData({
            psd: e.detail.value
        })
    },
    submit: function() {
        var that = this
        wx.request({
            url: 'https://a1.sdb.easemob.com/easemob-demo/chatdemoui/users',
            data: {
                username: that.data.username,
                password: that.data.password,
                nickname: that.data.nickname
            },
             header: {
              'content-type': 'application/json'
            },
            method: 'POST',
            success: function(res) {
                console.log(res)
            }
        })
    },

    login: function() {
        var that = this
        console.log(that.data)
        wx.request({
            url: 'https://a1.sdb.easemob.com/easemob-demo/chatdemoui/token',
            data: {
                grant_type: that.data.grant_type,
                username: that.data.name,
                password: that.data.psd               
            },
            header: {
                'content-type':'application/json'
            },
            method: 'POST',
            success: function(res) {
                console.log(res)
            }


        })
    }
})