#import "React/RCTEventEmitter.h"
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(HoverableViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(onMouseEnter, RCTDirectEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onMouseLeave, RCTDirectEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onMouseMove, RCTDirectEventBlock);

@end
