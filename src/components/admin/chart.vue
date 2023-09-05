<script lang="ts" setup>
</script>

<template>
  <div class="banner">
    <el-row :gutter="10">
      <el-col :md="24" :lg="18">
        <div class="welcome suspension">
          <img class="welcome-img" alt="" />
          <div class="welcome-text">
            <div class="welcome-title"></div>
            <div class="welcome-note"></div>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" class="hidden-md-and-down">
        <div class="working">
          <img class="working-coffee" alt="" />
          <div class="working-text">
            <span class="time"></span>
          </div>
          <div @click="" class="working-opt working-rest">
                            
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="small-panel-box">
    <el-row :gutter="20">
      <el-col :sm="12" :lg="6">
        <div class="small-panel user-reg suspension">
          <div class="small-panel-title">用户注册量</div>
          <div class="small-panel-content">
          <div class="content-left">
            <el-icon><TopRight /></el-icon>
            <span id="user_reg_number">5456</span>
          </div>
          <div class="content-right">+14%</div>
          </div>
        </div>
      </el-col>
      <el-col :sm="12" :lg="6">
        <div class="small-panel file suspension">
          <div class="small-panel-title">商品销售量</div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon><Coin /></el-icon>
              <span id="file_number">1234</span>
            </div>
            <div class="content-right">+50%</div>
          </div>
        </div>
      </el-col>
      <el-col :sm="12" :lg="6">
        <div class="small-panel users suspension">
          <div class="small-panel-title">用户总数</div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon><User /></el-icon>
              <span id="users_number">9486</span>
            </div>
            <div class="content-right">+28%</div>
          </div>
        </div>
      </el-col>
      <el-col :sm="12" :lg="6">
        <div class="small-panel addons suspension">
          <div class="small-panel-title">销售总额</div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon><Sell /></el-icon>
              <span id="addons_number">875</span>
            </div>
            <div class="content-right">+88%</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-row>
    <el-col :span="6">
      <el-statistic title="Daily active users" :value="268500" />
    </el-col>
    <el-col :span="6">
      <el-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <el-icon style="margin-left: 4px" :size="12">
              <Male />
            </el-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic title="Total Transactions" :value="172000" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Feedback number" :value="562">
        <template #suffix>
          <el-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </el-icon>
        </template>
      </el-statistic>
    </el-col>
  </el-row>
</template>

<style scoped>
.welcome {
  background: #e1eaf9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 15px 20px !important;
  box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
}
.welcome-img {
  height: 100px;
  margin-right: 10px;
  user-select: none;
}
.welcome-title {
  font-size: 1.5rem;
  line-height: 30px;
  color: var(--ba-color-primary-light);
}
.welcome-note {
  padding-top: 6px;
  font-size: 15px;
  color: var(--el-text-color-primary);
}
.working {
  height: 130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  position: relative;
}
.working-coffee {
  transition: all 0.3s ease;
  width: 80px;
}
.working-text {
  display: block;
  width: 100%;
  font-size: 15px;
  text-align: center;
  color: var(--el-text-color-primary);
}
.small-panel-box {
  margin-top: 20px;
}
.small-panel {
  background-color: #e9edf2;
  border-radius: var(--el-border-radius-base);
  padding: 25px;
  margin-bottom: 20px;
}
.small-panel-title {
  color: #92969a;
  font-size: 15px;
}
.small-panel-content {
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  color: #2c3f5d;
}
.content-left {
  font-size: 24px;
}
.icon {
  margin-right: 10px;
}
span {
  display: inline-block;
  font-size: 28px;
}
.content-right {
  font-size: 18px;
  margin-left: auto;
}
.color-success {
  color: var(--el-color-success);
}
.color-warning {
  color: var(--el-color-warning);
}
.color-danger {
  color: var(--el-color-danger);
}
.color-info {
  color: var(--el-text-color-secondary);
}
.el-col {
  text-align: center;
}
</style>