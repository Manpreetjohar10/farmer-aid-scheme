export function logAction(action,user){
 console.log(`[${new Date().toISOString()}] ${user}: ${action}`);
}