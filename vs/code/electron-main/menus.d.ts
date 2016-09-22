import * as env from 'vs/code/electron-main/env';
import { IWindowsService } from 'vs/code/electron-main/windows';
import { IStorageService } from 'vs/code/electron-main/storage';
import { IUpdateService } from 'vs/code/electron-main/update-manager';
export declare function generateNewIssueUrl(baseUrl: string, name: string, version: string, commit: string, date: string): string;
export declare class VSCodeMenu {
    private storageService;
    private updateService;
    private windowsService;
    private envService;
    private static lastKnownKeybindingsMapStorageKey;
    private static MAX_RECENT_ENTRIES;
    private isQuitting;
    private appMenuInstalled;
    private actionIdKeybindingRequests;
    private mapLastKnownKeybindingToActionId;
    private mapResolvedKeybindingToActionId;
    private keybindingsResolved;
    constructor(storageService: IStorageService, updateService: IUpdateService, windowsService: IWindowsService, envService: env.IEnvironmentService);
    ready(): void;
    private registerListeners();
    private resolveKeybindings(win);
    private updateMenu();
    private onOpen(path);
    private onClose(remainingWindowCount);
    private install();
    private addToOpenedPathsList(path?, isFile?);
    private removeFromOpenedPathsList(path);
    private clearOpenedPathsList();
    private getOpenedPathsList();
    private setMacApplicationMenu(macApplicationMenu);
    private setFileMenu(fileMenu);
    private getPreferencesMenu();
    private quit();
    private setOpenRecentMenu(openRecentMenu);
    private createOpenRecentMenuItem(path);
    private createRoleMenuItem(label, actionId, role);
    private setEditMenu(winLinuxEditMenu);
    private setViewMenu(viewMenu);
    private setGotoMenu(gotoMenu);
    private setMacWindowMenu(macWindowMenu);
    private toggleDevTools();
    private setHelpMenu(helpMenu);
    private getUpdateMenuItems();
    private createMenuItem(label, actionId, enabled?);
    private createMenuItem(label, click, enabled?);
    private createDevToolsAwareMenuItem(label, actionId, devToolsFocusedFn);
    private getAccelerator(actionId);
    private openAboutDialog();
    private openUrl(url, id);
    private reportMenuActionTelemetry(id);
}