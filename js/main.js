// 语言切换功能
function switchLanguage(lang) {
    const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?lang=${lang}`;
    history.pushState({ lang: lang }, "", newURL);

    // 切换显示内容
    if (lang === 'zh') {
        document.getElementById('content-zh').classList.remove('hidden');
        document.getElementById('content-en').classList.add('hidden');
        document.querySelector('.language-buttons button:nth-child(2)').classList.add('active');
        document.querySelector('.language-buttons button:nth-child(1)').classList.remove('active');
    } else {
        document.getElementById('content-en').classList.remove('hidden');
        document.getElementById('content-zh').classList.add('hidden');
        document.querySelector('.language-buttons button:nth-child(1)').classList.add('active');
        document.querySelector('.language-buttons button:nth-child(2)').classList.remove('active');
    }
}

// 从URL初始化语言设置
function switchLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en'; 
    switchLanguage(lang);
}

// 内联英文内容
const englishContent = `
<header>
    <div class="container">
        <h1>Mastery — The Ultimate Solution for 3D Hand Interaction Controllers with Low-Cost Glove Design</h1>
        <div class="contact-info">
            <span style="font-weight: bold;">Li ZiQi</span> | <a href="mailto:liziqi@matrixrealm.com" style="color: #ffffff; text-decoration: underline;">liziqi@matrixrealm.com</a>
        </div>
    </div>
</header>

<div class="container">
    <div class="video-container">
        <div class="video-wrapper">
            <iframe id="video-en" width="340" height="605" 
                src="https://www.youtube.com/embed/a5aWQXh2FL0?autoplay=0&vq=hd1080" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <p style="max-width: 340px; margin-top: 10px; text-align: left; margin-left: auto; margin-right: auto;">
                <strong>Note:</strong> Display hardware limited to 60Hz refresh rate
            </p>
        </div>
    </div>

    <div class="card">
        <h2>Overview</h2>
        <p>Powered by <span class="highlight">6-axis IMUs</span> along with <span class="highlight">proprietary hardware and software algorithms</span>, <strong>Mastery</strong> captures nearly all <span class="highlight">detailed movements</span> of the human hand with <span class="highlight">high precision</span>, all while keeping <span class="highlight">manufacturing costs low</span>. This enables users to interact in 3D environments in the most <span class="highlight">natural, effortless, and comfortable</span> way possible.</p>

        <p>The <span class="highlight">glove form</span> provides an ideal platform for the <span class="highlight">haptic feedback system</span> and <span class="highlight">haptic sensing system</span> (currently featuring vibration motors).</p>
        
        <div class="section-title">Market Applications</div>
        <div class="feature-grid">
            <div class="feature-item">
                <h3>Computer 3D Interaction</h3>
                <p>Unlike traditional controllers with buttons and joysticks, Mastery leverages natural hand movements, opening a new era of interaction. Just as smartphones replaced physical buttons with touch screens, <strong>Mastery</strong> makes interaction more <span class="highlight">intuitive and precise</span>.</p>
            </div>
            <div class="feature-item">
                <h3>Embodied Intelligence</h3>
                <p><strong>Mastery</strong> is the perfect device for collecting <span class="highlight">AI data for dexterous hands</span>, capable of generating <span class="highlight">high-quality multi-modal real hand interaction data</span> in bulk.</p>
            </div>
        </div>
    </div>
    
    <div class="card">
        <h2>Technical Specifications</h2>
        <div class="tech-spec">
            <div class="tech-spec-label">Weight</div>
            <div class="tech-spec-value">Approximately 100g per glove (excluding battery)</div>
        </div>
        <div class="tech-spec">
            <div class="tech-spec-label">Power Consumption</div>
            <div class="tech-spec-value">Approximately 83mA @ 5.1V per glove (with significant room for improvement)</div>
        </div>
    </div>

    <div class="card">
        <h2>Core Features</h2>
        <div class="feature-grid">
            <div class="feature-item">
                <h3>High Degree of Freedom</h3>
                <p>Academically, the full range of motion of the hand is generally categorized as having 21 degrees of freedom (excluding the wrist) or 27 degrees of freedom (including the wrist). This solution truly encompasses the complete range of motion of the human hand, including numerous joint degrees of freedom often simplified or ignored in academic studies, resulting in unmatched detail-tracking capabilities.</p>
            </div>
            
            <div class="feature-item">
                <h3>High Precision</h3>
                <p>Hand motion capture is an extremely complex system, and currently, no standard method exists to quantitatively measure error or to compare this solution quantitatively with others. By qualitatively analyzing the rendering results alongside recordings of real movements, it is apparent that this solution achieves a level of precision that far surpasses any known alternatives.</p>
            </div>
            
            <div class="feature-item">
                <h3>Low Latency</h3>
                <div class="table-container">
                    <table>
                        <tr>
                            <th>Process</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>Computation</td>
                            <td>&lt;1ms</td>
                        </tr>
                        <tr>
                            <td>Wireless (BLE 5.2 protocol)</td>
                            <td>7.5-12.5ms</td>
                        </tr>
                        <tr>
                            <td>Wired (USB 2.0 protocol)</td>
                            <td>&lt;1ms</td>
                        </tr>
                    </table>
                    <p><strong>Note:</strong> Video demonstrations use USB wired transmission, and the display hardware itself is limited to a maximum refresh rate of 60Hz.</p>
                </div>
            </div>
            
            <div class="feature-item">
                <h3>Self-Calibration</h3>
                <p>In theory, users do not need to perform any manual calibration after purchase. Mastery can self-calibrate during regular use through adaptive algorithms.</p>
                <p>This approach differs from most known wearable hand-tracking devices, which require users to perform specific gestures—such as making a fist or spreading fingers—before each use (and sometimes even before every startup).</p>
            </div>
            
            <div class="feature-item">
                <h3>Pinch Detection</h3>
                <p>With the support of dedicated hardware, this technology enables accurate single-hand pinch detection at key points, such as the touch of two fingertips. Based on this, it can achieve millimeter-level precision, allowing accurate triggering of functions like button presses or sliding motions within a movement scale of 1 millimeter.</p>
                <p>Compared to vision-based solutions that require the hand to stay within the camera's field of view and involve relatively larger pinch movements, this solution significantly enhances user experience and reduces user fatigue.</p>
            </div>
            
            <div class="feature-item">
                <h3>High Stability</h3>
                <ul class="stability-comparison">
                    <li><strong>Unlike 9-axis IMU systems</strong> - this solution remains unaffected by magnetic fields or ferromagnetic materials.</li>
                    <li><strong>Unlike electromagnetic systems</strong> - this solution is not influenced by nearby metallic objects.</li>
                    <li><strong>Unlike strain and bend sensors</strong> - this solution minimizes issues like sensor aging and parameter drift.</li>
                    <li><strong>Unlike computer vision solutions</strong> - this solution is immune to challenges such as lighting conditions and visual occlusion.</li>
                </ul>
            </div>
            
            <div class="feature-item">
                <h3>Easy to Wear</h3>
                <p>Only two steps are needed: put on the glove and secure the Velcro around the wrist.</p>
                <p>To accommodate different hand sizes, several standard elastic glove sizes are available. Finger thickness does not affect the fit; instead, the glove aims to match different finger lengths as closely as possible.</p>
            </div>
            
            <div class="feature-item">
                <h3>Low Cost</h3>
                <p>The manufacturing cost for each pair of gloves is around <span class="price-spotlight">$50</span>, which is significantly lower than other similar solutions.</p>
            </div>
        </div>
    </div>

    <div class="card">
        <h2>Cost Breakdown</h2>
        <div class="table-container">
            <p style="text-align: left;"><strong>Based on a single glove</strong></p>
            <table>
                <tr>
                    <th><strong>Categories</strong></th>
                    <th><strong>Price (USD)</strong></th>
                    <th><strong>Note</strong></th>
                </tr>
                <tr>
                    <td>IMU Chips</td>
                    <td style="text-align: right;">7.3</td>
                    <td>Based on Taobao retail price</td>
                </tr>
                <tr>
                    <td>MCU, BLE Chips</td>
                    <td style="text-align: right;">2.5</td>
                    <td>Based on Taobao retail price</td>
                </tr>
                <tr>
                    <td>Other ICs and Electronic Components</td>
                    <td style="text-align: right;">4.5</td>
                    <td>Estimated</td>
                </tr>
                <tr>
                    <td>PCB, FPC</td>
                    <td style="text-align: right;">2.0</td>
                    <td>Estimated</td>
                </tr>
                <tr>
                    <td>Enclosure and Protective Structure</td>
                    <td style="text-align: right;">2.8</td>
                    <td>Estimated</td>
                </tr>
                <tr>
                    <td>Specialized Fabric Gloves</td>
                    <td style="text-align: right;">4.2</td>
                    <td>Estimated</td>
                </tr>
                <tr>
                    <td>Assembly and Others</td>
                    <td style="text-align: right;">1.7</td>
                    <td>Estimated</td>
                </tr>
                <tr class="total-row">
                    <td><strong>Total</strong></td>
                    <td style="text-align: right;"><strong>25.0</strong></td>
                    <td></td>
                </tr>
            </table>
            <p><strong>Note:</strong> The values are calculated in RMB and then converted into USD based on the information and exchange rate as of February 8, 2025.</p>
        </div>
    </div>

    <div class="card">
        <h2>Development Timeline</h2>
        <div class="table-container">
            <table>
                <tr>
                    <th><strong>Time</strong></th>
                    <th><strong>Event</strong></th>
                </tr>
                <tr>
                    <td>2016.05</td>
                    <td>Started <strong>Mastery</strong> project.</td>
                </tr>
                <tr>
                    <td>2016.10</td>
                    <td>Developed the initial prototype, integrating industry-standard algorithms with an optimized sensor layout. At this stage, its performance surpassed all known similar solutions worldwide.</td>
                </tr>
                <tr>
                    <td>2018.01</td>
                    <td>Completed a major hardware architecture update.</td>
                </tr>
                <tr>
                    <td>2019.03</td>
                    <td>Completed major updates to software architecture and algorithms.</td>
                </tr>
                <tr>
                    <td>2019.05</td>
                    <td>Completed the <a href="https://youtu.be/w4YGIjqZUME" target="_blank"><strong>2019-milestone prototype</strong></a>, achieving motion capture performance that surpassed all known hand-tracking solutions at the time.</td>
                </tr>
                <tr>
                    <td>2019.08</td>
                    <td>Conceived a breakthrough approach to bypass the principle-based solution, significantly reducing material costs.</td>
                </tr>
                <tr>
                    <td>2019.11</td>
                    <td>Founded <strong>Matrix Realm Tech (Hangzhou) Co., Ltd.</strong> to further develop <strong>Mastery</strong>.</td>
                </tr>
                <tr>
                    <td>2020.01-2021.11</td>
                    <td>Refined hardware with enhanced industrial design and completely restructured the software architecture.</td>
                </tr>
                <tr>
                    <td>2021.12</td>
                    <td>Gained deeper theoretical insights into algorithms, leading to an initial solution for hand differences among users.</td>
                </tr>
                <tr>
                    <td>2022.01-2024.01</td>
                    <td>Worked on resolving production challenges and explored methods to reduce sensor material costs, though initial attempts were unsuccessful.</td>
                </tr>
                <tr>
                    <td>2024.05</td>
                    <td>Through extensive research, gained deeper expertise in IMU technology and mathematics, leading to significant improvements in both algorithms and hardware.</td>
                </tr>
                <tr>
                    <td>2024.10</td>
                    <td>Completed the <a href="https://youtu.be/a5aWQXh2FL0" target="_blank"><strong>2024-milestone prototype</strong></a>, which perfectly validated the original mathematical theory and algorithm. This breakthrough eliminated the inherent flaws of the original approach while drastically reducing costs.</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="card">
        <h2>About the Developer</h2>
        <div class="developer-profile">
            <h3>Li ZiQi</h3>
            <p>Founder of <strong>Matrix Realm Tech (Hangzhou) Co., Ltd.</strong></p>
            <ul>
                <li>Graduated with a bachelor's degree in Measurement and Control Technology and Instruments from Chongqing University (CQU) in 2014</li>
                <li>Ranked 1st in overall academic performance</li>
                <li>Expert in Human-Computer Interaction (HCI) with strong foundation in mathematics, physics, and biology</li>
                <li>Full-stack engineer with deep technical expertise in building and optimizing interactive systems</li>
            </ul>
        </div>
    </div>
</div>
`;

// 内联中文内容
const chineseContent = `
<header>
    <div class="container">
        <h1>掌控 — 低成本手套形态的3D手部交互控制器终极解决方案</h1>
        <div class="contact-info">
            <span style="font-weight: bold;">李子琪</span> | <a href="mailto:liziqi@matrixrealm.com" style="color: #ffffff; text-decoration: underline;">liziqi@matrixrealm.com</a>
        </div>
    </div>
</header>

<div class="container">
    <div class="video-container">
        <div class="video-wrapper">
            <iframe id="video-zh" width="340" height="605"
                src="https://player.bilibili.com/player.html?bvid=BV1swSzYUE6Z&autoplay=0" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" >
            </iframe>
            <p style="max-width: 340px; margin-top: 10px; text-align: left; margin-left: auto; margin-right: auto;">
                <strong>注：</strong>显示硬件最大刷新率为60Hz
            </p>
        </div>
    </div>

    <div class="card">
        <h2>概述</h2>
        <p>由<span class="highlight">6轴IMU</span>与<span class="highlight">专有硬件和软件算法</span>驱动，<strong>掌控</strong>以<span class="highlight">高精度</span>捕捉人类手部的几乎所有<span class="highlight">细微动作</span>，同时保持<span class="highlight">低制造成本</span>。它使用户能够以最<span class="highlight">自然、轻松、舒适</span>的方式在3D环境中进行交互。</p>

        <p><span class="highlight">手套形式</span>为<span class="highlight">触觉反馈系统</span>和<span class="highlight">触觉采集系统</span>提供了理想的载体（目前配备振动电机）。</p>
        
        <div class="section-title">市场应用</div>
        <div class="feature-grid">
            <div class="feature-item">
                <h3>计算机3D交互</h3>
                <p>与传统控制器依赖按钮、操纵杆并需要手持不同，<strong>掌控</strong>通过完全利用手部的自然运动，正在开启交互的新纪元。就像智能手机用多点触控屏代替了物理按键，<strong>掌控</strong>使交互变得更加<span class="highlight">直观、精确</span>。</p>
            </div>
            <div class="feature-item">
                <h3>具身智能</h3>
                <p><strong>掌控</strong>是<span class="highlight">为灵巧手提供AI数据</span>的完美采集装置，可用于批量生成<span class="highlight">高质量多模态的真实手部交互数据</span>。</p>
            </div>
        </div>
    </div>
    
    <div class="card">
        <h2>技术规格</h2>
        <div class="tech-spec">
            <div class="tech-spec-label">重量</div>
            <div class="tech-spec-value">每只手套大约 100 克（不包括电池）</div>
        </div>
        <div class="tech-spec">
            <div class="tech-spec-label">功耗</div>
            <div class="tech-spec-value">每只手套大约 83mA @ 5.1V（还有显著提升空间）</div>
        </div>
    </div>

    <div class="card">
        <h2>核心特性</h2>
        <div class="feature-grid">
            <div class="feature-item">
                <h3>高自由度</h3>
                <p>从学术角度来看，手部的完整运动范围通常被分为 21 个自由度（不包括手腕）或 27 个自由度（包括手腕）。该解决方案真正涵盖了人类手部的完整运动范围，包括学术研究中常常简化或忽略的多个关节自由度，具有无与伦比的细节追踪能力。</p>
            </div>
            
            <div class="feature-item">
                <h3>高精度</h3>
                <p>手部动作捕捉是一个极为复杂的系统，目前没有标准的方法来定量测量误差，也没有现有的标准来与其他解决方案进行定量比较。通过定性分析渲染结果和真实动作的记录，可以明显看出该方案的精度水平远超任何已知的其它方案。</p>
            </div>
            
            <div class="feature-item">
                <h3>低延迟</h3>
                <div class="table-container">
                    <table>
                        <tr>
                            <th>过程</th>
                            <th>时间</th>
                        </tr>
                        <tr>
                            <td>计算</td>
                            <td>&lt;1ms</td>
                        </tr>
                        <tr>
                            <td>无线（BLE 5.2 协议）</td>
                            <td>7.5-12.5ms</td>
                        </tr>
                        <tr>
                            <td>有线（USB 2.0 协议）</td>
                            <td>&lt;1ms</td>
                        </tr>
                    </table>
                    <p><strong>注：</strong>视频演示使用 USB 有线传输，显示硬件本身的最大刷新率为 60Hz。</p>
                </div>
            </div>
            
            <div class="feature-item">
                <h3>自校准</h3>
                <p>理论上，用户在购买后无需进行任何手动校准。掌控可以通过自适应算法在正常使用过程中进行自校准。</p>
                <p>该特性不同于大多数已知的穿戴式手部追踪设备，那些设备要求用户在每次使用前进行特定手势（例如握拳或张开手指），有时甚至需要在每次使用前进行。</p>
            </div>
            
            <div class="feature-item">
                <h3>捏合检测</h3>
                <p>基于专有硬件，该项技术能够在关键点（如两个指尖接触时）实现精确的单手捏合检测。基于此，它可以在毫米级精度下实现像按钮按下或滑动等功能的精确触发。</p>
                <p>相比需要手部保持在摄像头视野内并且捏合动作相对较大的基于视觉的解决方案，该解决方案显著提升了用户体验，减少了用户的疲劳感。</p>
            </div>
            
            <div class="feature-item">
                <h3>高稳定性</h3>
                <ul class="stability-comparison">
                    <li><strong>与 9 轴 IMU 方案相比</strong> - 该方案不受 磁场 或 铁磁物质 的影响。</li>
                    <li><strong>与 电磁 方案相比</strong> - 该方案不受环境中 金属物体 的干扰。</li>
                    <li><strong>与 拉伸、弯曲传感器 方案相比</strong> - 该方案几乎避免了由 传感器老化 引起的 参数漂移。</li>
                    <li><strong>与 计算机视觉 方案相比</strong> - 该方案显然不受 光线因素 或 视觉遮挡 等因素的影响。</li>
                </ul>
            </div>
            
            <div class="feature-item">
                <h3>易穿戴</h3>
                <p>只需两步：戴上手套并将魔术贴固定在手腕。</p>
                <p>为适应不同的手部尺寸，提供几种标准的弹性手套尺码。手指的粗细不会影响适配性，手套旨在尽可能匹配不同的手指长度。</p>
            </div>
            
            <div class="feature-item">
                <h3>低成本</h3>
                <p>每双手套量产制造成本约<span class="price-spotlight">360元人民币</span>，远低于其他同类方案。</p>
            </div>
        </div>
    </div>

    <div class="card">
        <h2>成本明细</h2>
        <div class="table-container">
            <p style="text-align: left;"><strong>基于单只手套</strong></p>
            <table>
                <tr>
                    <th><strong>类别</strong></th>
                    <th><strong>价格 (人民币)</strong></th>
                    <th><strong>备注</strong></th>
                </tr>
                <tr>
                    <td>IMU 芯片</td>
                    <td style="text-align: right;">53.5</td>
                    <td>基于淘宝零售价格</td>
                </tr>
                <tr>
                    <td>MCU, BLE 芯片</td>
                    <td style="text-align: right;">16.5</td>
                    <td>基于淘宝零售价格</td>
                </tr>
                <tr>
                    <td>其他 IC 和电子元件</td>
                    <td style="text-align: right;">33.0</td>
                    <td>预估</td>
                </tr>
                <tr>
                    <td>PCB, FPC</td>
                    <td style="text-align: right;">14.5</td>
                    <td>预估</td>
                </tr>
                <tr>
                    <td>外壳和保护结构</td>
                    <td style="text-align: right;">20.0</td>
                    <td>预估</td>
                </tr>
                <tr>
                    <td>专用布料手套</td>
                    <td style="text-align: right;">30.0</td>
                    <td>预估</td>
                </tr>
                <tr>
                    <td>组装及其他</td>
                    <td style="text-align: right;">12.5</td>
                    <td>预估</td>
                </tr>
                <tr class="total-row">
                    <td><strong>总计</strong></td>
                    <td style="text-align: right;"><strong>180.0</strong></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>

    <div class="card">
        <h2>发展时间线</h2>
        <div class="table-container">
            <table>
                <tr>
                    <th><strong>时间</strong></th>
                    <th><strong>事件</strong></th>
                </tr>
                <tr>
                    <td>2016.05</td>
                    <td>启动<strong>掌控</strong>项目。</td>
                </tr>
                <tr>
                    <td>2016.10</td>
                    <td>开发了初始原型，使用了行业标准算法并优化了传感器布局，该版本性能超越了当时全球所有已知的IMU手套技术方案。</td>
                </tr>
                <tr>
                    <td>2018.01</td>
                    <td>完成了一次的硬件架构更新。</td>
                </tr>
                <tr>
                    <td>2019.03</td>
                    <td>完成了软件架构和算法的重要更新。</td>
                </tr>
                <tr>
                    <td>2019.05</td>
                    <td>完成了<a href="https://www.bilibili.com/video/BV1q4411g7Yi" target="_blank"><strong>2019-里程碑原型</strong></a>，该版本实现了超越当时全球所有已知手部追踪解决方案的运动捕捉性能。</td>
                </tr>
                <tr>
                    <td>2019.08</td>
                    <td>为解决IMU基础原理的局限性提出了突破性的改良方案，同时能够极大降低器件成本。</td>
                </tr>
                <tr>
                    <td>2019.11</td>
                    <td>为进一步发展<strong>掌控</strong>，成立了<strong>源域科技（杭州）有限公司</strong>。</td>
                </tr>
                <tr>
                    <td>2020.01-2021.11</td>
                    <td>继续完善硬件并进行了工业设计优化，完全重构了软件架构。</td>
                </tr>
                <tr>
                    <td>2021.12</td>
                    <td>深入理论算法研究，提出了解决不同人手部差异的初步方案。</td>
                </tr>
                <tr>
                    <td>2022.01-2024.01</td>
                    <td>致力于解决生产问题，探索降低传感器材料成本的方法，但初步的多轮尝试均以失败告终。</td>
                </tr>
                <tr>
                    <td>2024.05</td>
                    <td>经过之前大量研究，得到启发顿悟，更加深刻理解了IMU技术和算法理论，实现了算法和硬件的显著改进。</td>
                </tr>
                <tr>
                    <td>2024.10</td>
                    <td>完成了<a href="https://www.bilibili.com/video/BV1swSzYUE6Z" target="_blank"><strong>2024-里程碑原型</strong></a>，完美验证了数学理论和算法，这一突破真正消除了原有IMU方案的固有缺陷，并大幅降低了成本。</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="card">
        <h2>关于开发者</h2>
        <div class="developer-profile">
            <h3>李子琪</h3>
            <p>源域科技（杭州）有限公司 创始人</p>
            <ul>
                <li>2014年毕业于重庆大学（CQU），获测量控制技术与仪器专业学士学位</li>
                <li>在校期间总成绩排名第一</li>
                <li>在人机交互（HCI）领域具有扎实的数学、物理和生物学基础</li>
                <li>全栈工程师，在构建和优化交互系统方面具有深厚的技术专长</li>
            </ul>
        </div>
    </div>
</div>
`;

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 直接内联内容
    document.getElementById('content-en').innerHTML = englishContent;
    document.getElementById('content-zh').innerHTML = chineseContent;
    
    // 初始化语言
    switchLanguageFromURL();
    
    // 为语言按钮添加active类
    const buttons = document.querySelectorAll('.language-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 添加共享的Footer
    const footerContent = `
    <footer>
        <div class="container">
            <p class="company-name">源域科技（杭州）有限公司</p>
            <div class="company-logo">
                <svg xmlns:svg="http://www.w3.org/2000/svg"
                     xmlns="http://www.w3.org/2000/svg"
                     height="18"
                     width="210"
                     version="1.1"
                     viewBox="0 0 210 18">
                    <path style="fill:#ffffff;stroke-width:0"
                          d="M 0,0 V 18 H 3 V 5.4 l 4.5,7.2 h 3.75 L 15.6,5.4 V 18 h 3 V 0 H 14.85 L 9.3,9.6 3.75,0 Z m 28.2,0 -7.35,18 h 9.597657 v -0.9 c 0,-1.5 -1.05,-2.7 -2.25,-2.7 h -2.25 L 30,4.5 35.55,18 H 39.3 L 31.95,0 Z m 9,0 v 3.6 h 7.35 V 18 H 48.3 V 3.6 h 7.35 V 2.85 C 55.65,1.2 54.75,0 53.55,0 Z M 57.9,0 V 3.6 H 70.5 V 7.2 H 57.9 V 18 h 3 v -7.2 h 6.75 l 3,7.2 h 3.75 l -3,-7.2 h 0.14941 c 1.5,0 2.7,-1.5 2.7,-3.3 V 3.6 C 74.25,1.5 73.05,0 71.55,0 Z M 77.25,0 V 18 H 81 V 0 Z m 6.6,0 7.05,9 -7.05,9 h 4.5 l 4.8,-6.15 4.8,6.15 h 4.5 L 95.4,9 102.45,0 h -4.5 L 93.15,6.15 88.35,0 Z m 31.2,0 v 3.45 c 0,0 0,0.1523437 0.1494,0.1523436 h 12.45 V 7.2 H 115.05 V 18 h 3 v -7.2 h 6.75 l 3,7.2 h 3.75 l -3,-7.05 c 0,0 0,-0.15 0.1494,-0.15 h 0.15234 c 1.5,0 2.69824,-1.5 2.69824,-3.3 V 3.6 c -0.14999,-2.1 -1.35,-3.6 -3,-3.6 z m 18.6,0 V 3.6 H 150 V 2.85 C 150,1.2 148.95,0 147.75,0 Z m 25.95,0 -7.35,18 h 9.6 v -0.9 c 0,-1.5 -1.05,-2.7 -2.25,-2.7 h -2.25 l 4.04942,-9.9 5.54883,13.5 h 3.75 L 163.35,0 Z m 13.34766,0 v 18 h 16.35 v -0.9 c 0,-1.35 -1.05,-2.7 -2.25,-2.7 h -10.35 V 0 Z m 18.6,0 v 18 h 3 V 5.4 l 4.35,7.2 h 3.75 l 4.5,-7.2 V 18 H 210 V 0 h -3.6 L 200.85,9.6 195.14942,0 Z M 133.64941,7.2 V 18 H 150 v -0.9 c 0,-1.5 -1.05,-2.7 -2.25,-2.7 H 137.4 V 10.8 H 150 V 9.75 c 0,-1.5 -1.05,-2.5517577 -2.25,-2.5517577 z" />
                </svg>
            </div>
            <p>© 2019-2025 All Rights Reserved</p>
        </div>
    </footer>
    `;
    
    // 将Footer添加到页面上的适当位置
    document.querySelector('body').insertAdjacentHTML('beforeend', footerContent);
});