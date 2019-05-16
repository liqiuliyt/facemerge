const $ = require("jquery");
class FaceMerge {
    constructor(option) {
        this.default = {
            'merge_rate': 80
        };
        this.options = Object.assign(this.default, option);
        this.template_url = this.options.template_url;
        this.merge_url = this.options.merge_url;
        this.merge_rate = this.options.merge_rate;
    }
    ajax() {
        let _this=this;
        let params = {
            'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
            'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
            'template_url': this.template_url,
            'merge_url': this.merge_url,
            'merge_rate': this.merge_rate
        };
        var p = new Promise(function (resolve, reject) {
            $.ajax({
                url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
                method: 'POST',
                data: params == null ? '' : params,
                async: true,
                contentType: "application/x-www-form-urlencoded",
                success: function (resp) {
                    resolve(resp);
                },
                error: function (error) {
                    let message=_this.packagingErrorMessages(error);
                    reject(message);
                }
            });
        });
        return p;
    }
    packagingErrorMessages(error) {
        let errorMessage={
            readystate:error.readyState,
            statusText:error.statusText
        };
        return errorMessage;
    }
    
}
export default FaceMerge;