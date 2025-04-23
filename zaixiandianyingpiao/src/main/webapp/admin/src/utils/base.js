const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixiandianyingpiao/",
            name: "zaixiandianyingpiao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixiandianyingpiao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线电影票购买系统"
        } 
    }
}
export default base
