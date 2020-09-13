# upload image

1. `file`→`preferences`→`image`

2. 到 https://sm.ms/home/apitoken 取得 token (需登入/註冊)

3. `open config` 併案下面修改

4. ```json
   {
     "picBed": {
       "uploader": "smms", // 代表当前的默认上传图床为 SM.MS,
       "smms": {
         "token": "" // 从https://sm.ms/home/apitoken获取的token
       }
     },
     "picgoPlugins": {} // 为插件预留
   }
   ```

5. `test upload`

tutorial here
https://support.typora.io/Upload-Image/



