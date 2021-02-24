<template>
	<div>
		<el-carousel :interval="4000" type="card" height="200px">
			<el-carousel-item v-for="item in 6" :key="item">
				<h3 class="medium">{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
		<div class="list" v-for="(o, c) in 3" :key="c">
			<h2>前端开发</h2>
      <el-row :gutter="10">
        <el-col v-for="(e,i) in 6" :key="i" :span="8">
          <el-card>
            <img src="@/assets/xiaohuihui.jpg" class="image">
            <div style="padding: 14px;">
                <el-link :underline="false" href="/course">Vue全家桶</el-link>
                <div>
                    <el-button type="text">高级</el-button>
                    <el-button type="text" icon="el-icon-user">46</el-button>
                  </div>
                  <div>
                    <span class="price">￥？？？</span>
                    <span class="real-price">￥？？？</span>
                    <el-button type="danger" round size="mini" class="limit" >限时优惠</el-button>
                  </div>
              </div>
          </el-card>
        </el-col>
      </el-row>
		</div>
	</div>
</template>
<style>
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
.el-col {
	border-radius: 4px;
}
.el-row {
	margin-bottom: 20px;
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
	margin: 0 5px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
.list {
	text-align: center;
	height: 100px;
	line-height: 100px;
	margin-bottom: 100px;
}
img{
    width: 100px;
    height: 100px;
}
</style>
