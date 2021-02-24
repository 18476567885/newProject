<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>网页前端</el-breadcrumb-item>
			<el-breadcrumb-item>Vue全家桶</el-breadcrumb-item>
		</el-breadcrumb>
		<div>
			<el-row class="detail" :gutter="20">
				<el-col :span="10">
					<img src="@/assets/logo.png" alt="" />
				</el-col>
				<el-col :span="6">
					<el-card class="box-card">
						<!-- 标题 -->
						<div class="title">Vue全家桶</div>
						<!-- 评分 -->
						<div class="star">
							<el-rate :value="3.5" disabled show-score text-color="#ff9900" score-template="3.5"> </el-rate>
						</div>
						<!-- 标签 -->
						<div>
							<el-button type="primary" plain size="mini">高级</el-button>
							<el-button type="primary" plain size="mini">前端</el-button>
							<el-button type="primary" plain size="mini">Vue</el-button>
						</div>
						<!-- 价格 -->
						<div class="price">
							￥ 998.12 元
						</div>
						<!-- 按钮 -->
						<div class="button">
							<el-button type="danger" size="medium">加入购物车</el-button>
							<el-button type="danger" size="medium">立即购买</el-button>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<el-tabs value="first">
            <el-tab-pane label="课程介绍" name="first">
              <span slot="label"><i class="el-icon-date"></i> 课程介绍</span>
              <img  src="@/assets/dalin.jpg" alt="">
            </el-tab-pane>
            <el-tab-pane label="章节" name="second">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback" name="2">
                      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency" name="3">
                      <div>简化流程：设计简洁直观的操作流程；</div>
                      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                  </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="用户评论" name="third">
                
            </el-tab-pane>
          </el-tabs>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
}
</script>
<style>
.el-breadcrumb {
	padding-bottom: 20px;
}
.detail img {
	width: 100%;
}
.detail .title {
	font-weight: bold;
	font-size: 20px;
}
.detail .star {
	padding: 10px 0;
}
.detail .price {
	padding: 10px 0;
	color: #f56c6c;
}
/* .logo1 {
	height: 200px;
	width: 200px;
} */
.detail img {
    width: 100%;
  }
  .detail .title{
    font-weight: bold;
    font-size: 20px;
  }
  .detail .star{
    padding: 10px 0;
  }
  .detail .price{
    padding: 10px 0;
    color: #F56C6C;
  }
  .el-tabs img {
    width: 100%;
    height: 100%;
  }
</style>
