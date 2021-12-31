// 用代码的方式类配置复杂配置项。
export default ()=> ({
    port2: 7777,
    database2: {
        host2: process.env.DATABASE_HOST,
        port2: parseInt(process.env.DATABASE_PORT, 10) || 5432
    }
})